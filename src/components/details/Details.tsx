import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from './../../models/GetCharacter';
import { CharacterDetailsProps } from '../../interfaces/DetailsInterface';
import Loader from '../common/loader/Loader';

/**
 * Details component to display more information from one character.
 */
const Details: React.FC<CharacterDetailsProps> = () => {
    const { id } = useParams<{ id: string | undefined }>();
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { id },
    });
    
    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message} </p>;

    return (
        <div>
            {!data && <div className="font-bold text-orange-400">No available data</div>}

            <div className="mx-auto my-4 p-2 border border-r-indigo-100 rounded w-full md:w-2/3 lg:w-1/3 bg-white">
                <h2 className="font-semibold text-2xl">
                    {data.character.name}
                </h2>
                <div className="flex text-center content-center items-center justify-center">
                    <img src={data.character.image} alt={data.character.name} title={data.character.name} />
                </div>
                <div className="md:flex py-4 px-4">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        ID:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.id}
                    </div>
                </div>
                <div className="md:flex py-4 px-4 bg-slate-100">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Name:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.name}
                    </div>
                </div>
                <div className="md:flex py-4 px-4">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Status:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.status}
                    </div>
                </div>
                <div className="md:flex py-4 px-4 bg-slate-100">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Species:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.species}
                    </div>
                </div>
                <div className="md:flex py-4 px-4">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Type:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {!data.character.type && <span>n/a</span>}
                        {data.character.type}
                    </div>
                </div>
                <div className="md:flex py-4 px-4 bg-slate-100">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Origin:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.origin.name}
                    </div>
                </div>
                <div className="md:flex py-4 px-4">
                    <div className="md:flex-col w-full md:w-1/4 font-bold md:font-normal">
                        Location:
                    </div>
                    <div className="md:flex-col w-full md:w-3/4">
                        {data.character.location.name}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center text-center my-5">
                <button
                    onClick={() => history.back()}
                    className="flex items-center justify-center 
                                bg-zinc-100 hover:bg-zinc-500
                                text-zinc-800 font-semibold hover:text-white 
                                py-2 px-4 
                                border border-zinc-400 hover:border-transparent rounded 
                                cursor-pointer"  
                >
                    Back to list
                </button>
            </div>
        </div>
    );
};

export default Details;
