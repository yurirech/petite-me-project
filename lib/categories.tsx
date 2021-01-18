import { db } from "../firebase/utils";

//This function retrieves all data from the database
export async function getCategoriesData() {
	try {
		const collection = await db.collection("categories").get();
		return collection.docs.map((doc) => {
			return {
				name: doc.id,
				...doc.data(),
			};
		});
	} catch (err) {
		console.log(err);
	}
}

//This function creates the New Arrivals section by get all items that are set to true
export async function createNewArrivals(categories) {
	const allItems = categories.map((category: any) => category.items);
	const filteredItems = allItems.flat(1).filter((item) => item.isNew === true);
	
	return {
		name: "new-arrivals",
		items: filteredItems,
	};
}

//This merges all the categories 
export async function mergeAllCategories() {
	const categories = await getCategoriesData();
	const newArrivals = await createNewArrivals(categories);

	return [...categories, newArrivals];
}

//This function gets all the categories' ids
export async function getAllCollectionsIds() {
	try {
		const allCategories = await mergeAllCategories();
		
		return allCategories.map((category) => {
			return {
				params: {
					category: category.name,
				},
			};
		});
	} catch (err) {
		console.log(err);
	}
}

export async function getCategoryData(category: string, items: any) {
	try {
		const allCategories = await mergeAllCategories();
		
		allCategories.map((data: any) => {
			if (data.name === category) {
				items = data.items;
			}
		});
		return {
			category,
			items,
		};
	} catch (err) {
		console.log(err);
	}
}
