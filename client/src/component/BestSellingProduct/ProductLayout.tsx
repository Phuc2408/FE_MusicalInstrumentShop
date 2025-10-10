import { useState } from "react";
import sampleProduct from "../../sample/sample"
import ProductGrid from './ProductGrid';
import ProductTab from "./ProductTab"

export default function ProductLayout() {
    const [activeTab, setActiveTab] = useState('electric');

    return (
        <>
            <ProductTab activeTab={activeTab} setActiveTab={setActiveTab} />
        </>
    )
}