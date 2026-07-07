
import Navbar from "@/components/shared/Navbar";
// import { getServerSession } from "next-auth";
import Footer from "@/components/shared/Footer";


const CommonLayout =async ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {

//   const session = await getServerSession();
    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-6xl">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;