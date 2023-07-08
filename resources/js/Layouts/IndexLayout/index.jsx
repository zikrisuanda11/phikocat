import Navbar from "@/Components/Navbar";

export default function IndexLayout({ count_product, auth, children}){
  return (
    <div>
      <Navbar auth={auth} count_product={count_product}/>
      {children}
    </div>
  )
}