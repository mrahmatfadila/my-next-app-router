import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server"; 

const data = [
    {
        id: 1,
        title: 'Nike Air Force 1 07',
        price: 1549000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81489f88-bccf-413e-acd0-eefc3650fd68/zoom-vomero-5-shoes-CrW9xf.png"
    },
    {
        id: 2,
        title: 'Jumpan MVP',
        price: 2629000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33220c81-c71e-4b20-b39d-db46c56f4e85/jumpman-mvp-shoes-JV1HCs.png"
    },
    {
        id: 3,
        title: 'Nike Air Max',
        price: 1549000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f59cef64-c474-4aa0-ae36-9f4043a42dcc/air-max-solo-shoes-3CCSTF.png"
    },
]

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id')
    // console.log(searchParams)
    // console.log(id)
    if (id) {
        // (item.id = data.id = 1) === (Number(id) = 1 = const id = searchParams.get('id') = '1' maka hasilnya jdi true karena 1 === 1)
        const detailProduct = await retrieveDataById("products", id)
        // console.log(detailProduct) 
        if(detailProduct) {
        return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
        }
        return NextResponse.json({ status: 404, message: "Not Found", data: {} });
    }
    const products = await retrieveData("products")

    return NextResponse.json({ status: 200, message: "Success", data: products });
}