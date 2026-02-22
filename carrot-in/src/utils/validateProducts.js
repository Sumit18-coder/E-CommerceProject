import { CATEGORY_CONFIG } from "./categoryConfig";

export function validateProducts(products) {
    if (!Array.isArray(products)) {
        console.error("❌ Products is not an array", products);
        return;
    }

    const ids = new Set();

    products.forEach((p, index) => {
        console.log("Product category:", p.category);  // 👈 ADD THIS

        const category = CATEGORY_CONFIG[p.category];

        if (!category) {
            console.error(`❌ Invalid category "${p.category}"`, p);
            return;
        }

        // ✅ Base fields
        const BASE_REQUIRED_FIELDS = [
            "id",
            "name",
            "Brand",
            "image",
            "price",
            "delivery",
            "category",
        ];

        BASE_REQUIRED_FIELDS.forEach((key) => {
            if (!(key in p)) {
                console.error(`❌ Missing "${key}" → index ${index}`, p);
            }
        });

        // ✅ Filter fields (dynamic per category)
        Object.keys(category.filters).forEach((filterKey) => {
            if (!(filterKey in p)) {
                console.warn(`⚠️ Missing filter "${filterKey}" → ${p.id}`);
            }
        });

        // ✅ Type checks
        if (typeof p.price !== "number") {
            console.error(`❌ Price must be number → ${p.id}`);
        }

        if ("rating" in p && (p.rating < 0 || p.rating > 5)) {
            console.error(`❌ Rating must be 0–5 → ${p.id}`);
        }

        if ("Sizes" in p && !Array.isArray(p.Sizes)) {
            console.error(`❌ Sizes must be array → ${p.id}`);
        }

        if (ids.has(p.id)) {
            console.error(`❌ Duplicate ID → ${p.id}`);
        }
        ids.add(p.id);
    });

    console.log("✅ Product validation complete");
}
