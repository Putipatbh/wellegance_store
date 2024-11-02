import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
    const collections = await getCollections();

    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5">
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-black-500"></div>
                <span className="mx-4 text-heading1-bold">Categories</span>
                <div className="flex-grow border-t border-black-500"></div>
            </div>
            {!collections || collections.length === 0 ? (
                <p className="text-body-bold">No Categories found</p>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-8" >
                    {collections.map((collection: CollectionType) => (
                        <Link href={`/collections/${collection._id}`} key={collection._id}>
                            <Image
                                key={collection._id}
                                src={collection.image}
                                alt={collection.title}
                                width={300}
                                height={214}
                                className="rounded-lg cursor-pointer"
                            />
                            <div className="text-base-bold text-center mt-2">{collection.title}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Collections