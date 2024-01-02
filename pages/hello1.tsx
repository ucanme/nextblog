import { useRouter } from 'next/router'
import { NextPageContext } from "next"
export default  function Page(){
    return (
        <div className="grid justify-center">
            hekki
        </div>
    )
}

export async function getServerSideProps(context :NextPageContext) {
    const  {id} = context.query
    console.log(id)
    return {
        props:{
            id:1
        }
    }
}