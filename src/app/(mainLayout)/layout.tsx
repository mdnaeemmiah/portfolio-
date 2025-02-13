
import Navbar from "@/components/shared/Navbar";
import { getServerSession } from "next-auth";
import Footer from "@/components/shared/Footer";


const CommonLayout =async ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {

  const session = await getServerSession();
    return (
        <div>
            <Navbar  session={session}/>
            <div className="min-h-screen  mt-20 container mx-auto">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;