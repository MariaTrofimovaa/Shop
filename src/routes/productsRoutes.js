import LaptopList from "../Components/laptopList/LaptopList";
import PhoneList from "../Components/phoneList/PhoneList";

export const productsRoutes = [
    {
        path: "/phones",
        name: "Phones",
        exact: true,
        component: PhoneList
    },
    
    {
        path: "/laptop",
        name: "Laptops",
        exact: true,
        component: LaptopList
    }
]