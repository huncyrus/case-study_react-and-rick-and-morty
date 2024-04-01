import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Pagination from './../pagination/Pagination';
import { CharactersData } from './../../interfaces/ListInterface';
import { GET_CHARACTERS } from '../../models/GetCharacters';
import Loader from '../common/loader/Loader';

/**
 * List component to display a batch of characters.
 */
const List: React.FC = () => {
    const [page, setPage] = useState(1);
    const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS, {
        variables: { page },
    });

    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <table className="min-w-full block table-auto mx-auto md:table">
                <thead className="md:table-header-group">
                    <tr className="py-2 px-2 bg-gray-400 font-bold block md:table-row">
                        <th className="py-2 px-2 content-center text-center block md:table-cell">Image</th>
                        <th className="py-2 px-2 content-center text-center block md:table-cell">Name</th>
                        <th className="py-2 px-2 content-center text-center block md:table-cell">Status</th>
                        <th className="py-2 px-2 content-center text-center block md:table-cell">Species</th>
                        <th className="py-2 px-2 content-center text-center block md:table-cell">Options</th>
                    </tr>
                </thead>
                <tbody className="md:table-row-group">
                {data?.characters.results.map(({ id, name, status, species, image }) => (
                    <tr key={id} className="even:bg-gray-100 odd:bg-white py-1 px-2 hover:bg-rum-swizzle-200 block md:table-row">
                        <td className="py-2 px-2 content-center text-left md:text-center block md:table-cell">
                            <span 
                                className="inline-block w-1/3 md:hidden font-bold"
                            >
                                Image: 
                            </span>
                            <img 
                                src={image} 
                                alt={name} 
                                className="w-10 h-10 rounded-full mx-auto"
                            />
                        </td>
                        <td className="py-2 px-2 content-center text-left md:text-left block md:table-cell">
                            <span 
                                className="inline-block w-1/3 md:hidden font-bold"
                            >
                                Name:
                            </span>
                            {name}
                        </td>
                        <td className="py-2 px-2 content-center text-left md:text-center block md:table-cell">
                            <span 
                                className="inline-block w-1/3 md:hidden font-bold"
                            >
                                Status:
                            </span>
                            {status}
                        </td>
                        <td className="py-2 px-2 content-center text-left md:text-center block md:table-cell">
                            <span 
                                className="inline-block w-1/3 md:hidden font-bold"
                            >
                                Species: 
                            </span>
                            {species}
                        </td>
                        <td className="py-2 px-2 content-center text-center block md:table-cell">
                            <Link 
                                to={`/details/${id}`} 
                                className="flex items-center justify-center 
                                         bg-zinc-100 hover:bg-zinc-500
                                         text-zinc-800 font-semibold hover:text-white 
                                           py-2 px-4 
                                           border border-zinc-400 hover:border-transparent rounded 
                                           cursor-pointer"               
                            >
                                Details
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination page={page} setPage={setPage} totalPages={data?.characters.info.pages || 1} />
        </div>
    );
};

export default List;
