"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/veryfyToken";
import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import axios from "axios";

type DecodedToken = {
  email?: string;
};

type ProfileUser = {
  _id: string;
  email: string;
  name?: string;
  profileImage?: string;
};

type ApiErrorShape = {
  data?: {
    message?: string;
  };
};

const ProfilePage = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/db9egbkam/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "naeemmiah";

  const { data, isLoading, refetch } = useGetUsersQuery(undefined);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const users = useMemo<ProfileUser[]>(
    () => (Array.isArray(data?.data) ? data.data : []),
    [data?.data],
  );

  const tokenEmail = useMemo(() => {
    if (typeof window === "undefined") return "";
    const token = localStorage.getItem("accessToken");
    if (!token) return "";

    try {
      const decoded = verifyToken(token) as DecodedToken;
      return decoded.email || "";
    } catch {
      return "";
    }
  }, []);

  const email = currentUser?.email || tokenEmail;

  const profileUser = useMemo(
    () => users.find((u) => u.email === email),
    [users, email],
  );

  useEffect(() => {
    if (profileUser?.name) {
      setName(profileUser.name);
    }
    if (profileUser?.profileImage) {
      setProfileImage(profileUser.profileImage);
      if (typeof window !== "undefined") {
        localStorage.setItem("profileImage", profileUser.profileImage);
      }
    }
  }, [profileUser]);

  const handleImageUpload = async (file: File) => {
    const imageFormData = new FormData();
    imageFormData.append("file", file);
    imageFormData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      setIsUploading(true);
      const response = await axios.post(CLOUDINARY_URL, imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfileImage(response.data.secure_url);
      toast.success("Profile image uploaded");
    } catch {
      toast.error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (!profileUser?._id) {
      toast.error("Profile user not found");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setPasswordError("New password and confirm password do not match");
      return;
    }

    const payload: {
      name?: string;
      currentPassword?: string;
      newPassword?: string;
      profileImage?: string;
    } = {};

    if (name.trim()) payload.name = name.trim();
    if (newPassword.trim()) {
      if (!currentPassword.trim()) {
        setPasswordError("Current password is required to change password");
        return;
      }
      payload.currentPassword = currentPassword.trim();
      payload.newPassword = newPassword.trim();
    }
    if (profileImage.trim()) payload.profileImage = profileImage.trim();

    if (!payload.name && !payload.newPassword && !payload.profileImage) {
      toast.error("No changes to update");
      return;
    }

    try {
      await updateUser({ id: profileUser._id, updatedData: payload }).unwrap();
      toast.success("Profile updated successfully");
      if (payload.profileImage) {
        localStorage.setItem("profileImage", payload.profileImage);
      }
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      refetch();
    } catch (error: unknown) {
      const message = (error as ApiErrorShape)?.data?.message;
      toast.error(message || "Failed to update profile");
    }
  };

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  return (
    <section className="space-y-6">
      <div className="glass-card p-6">
        <p className="section-kicker">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Admin Profile
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Update your display name and change password from here.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card max-w-2xl p-6">
        <div className="grid gap-5">
          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              value={email}
              disabled
              className="dashboard-input opacity-80"
            />
          </div>

          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="dashboard-input"
            />
          </div>

          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="currentPassword">
              Current Password
            </label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="dashboard-input"
            />
          </div>

          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="newPassword">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Enter new password"
              className="dashboard-input"
            />
          </div>

          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordError("");
              }}
              placeholder="Confirm new password"
              className="dashboard-input"
            />
            {passwordError && (
              <p className="text-xs text-red-600">{passwordError}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="dashboard-label" htmlFor="profileImage">
              Profile Image
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  handleImageUpload(file);
                }
              }}
              className="dashboard-input file:border-0 file:bg-slate-900 file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-white"
            />
            {profileImage && (
              <div className="flex items-center gap-3 pt-2">
                <Image
                  src={profileImage}
                  alt="Profile preview"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="text-xs text-slate-500">
                  Profile image ready to save
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="dashboard-button"
              disabled={isUpdating || isUploading}
            >
              {isUploading
                ? "Uploading..."
                : isUpdating
                  ? "Updating..."
                  : "Update Profile"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfilePage;
