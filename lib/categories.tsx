import { db } from '../firebase/utils';

export async function getCategoriesData() {
		try {
			const collection = await db
			.collection('categories')
			.get();
			 return collection.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data()
				}
			})
		} catch (err) {
			console.log(err)
		}
	}

export async function getAllCollectionsIds() {
  try {
    const collections = await getCategoriesData();
    return collections.map(collection => {
      return {
        params: {
          id: collection.id
        }
      }
    })
  } catch(err) {
    console.log(err);
  }
}