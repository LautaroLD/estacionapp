import { useLocation, useSearchParams } from 'react-router-dom';
import { HeaderUser } from '../../components/shared/HeaderUser';
import { garageService } from '../../services/garage';
import useSWR from 'swr';
import { CardGarageResult } from '../../components/shared/CardGarageResult';
import { FormSearch } from '../../components/home-driver/FormSearch';
import { useEffect, useState } from 'react';
import { LoadingIcon } from '../../components/shared/LoadingIcon';

export const SearchPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [IsLoading, setIsLoading] = useState(true);
  const place = searchParams.get('place') ?? '';
  const startDate = searchParams.get('start-date') ?? '';
  const endDate = searchParams.get('end-date') ?? '';

  const { data: garages } = useSWR(
    ['search-garages', place, startDate, endDate],
    () =>
      garageService.search({
        location: place,
        startDate: startDate,
        endDate: endDate,
      })
  );
  useEffect(() => {
    garages && setIsLoading(false);
  }, [garages]);
  return (
    <>
      <HeaderUser />
      <div className='p-4 flex flex-1 flex-col'>
        <FormSearch
          key={location.search}
          initialValues={{
            place: place,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
          }}
        />
        {IsLoading && <LoadingIcon width={50} />}
        {garages?.map((garage) => (
          <CardGarageResult
            key={garage.id}
            id={garage.id}
            price={garage.price}
            name={garage.name}
            images={garage.images}
            address={garage.address}
            rating={garage.rating}
          />
        ))}
      </div>

      <div className='flex flex-col mb-4 inset-x-0 px-4'>
        <div className='flex justify-between gap-6 bg-[#FFE9CC] px-8 py-2 rounded-md'>
          <img src='/images/location.svg' alt='localización' />
          <div>
            <h4 className='text-xl font-semibold'>Ver mapa</h4>
            <p>Ubica los estacionamientos cercanos</p>
          </div>
        </div>
      </div>
    </>
  );
};
