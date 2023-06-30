import Navbar from "@/Components/Navbar";

export default function IndexLayout({auth, children}){
  return (
    <div>
      <Navbar auth={auth}/>
      {children}
    </div>
  )
}