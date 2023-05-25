import { useParams } from 'react-router-dom';

export const Gallery = () => {
  const { dogId } = useParams();
  // useEffect(()=>{
  //HTTP - запит
  //}, [])
  return <div>Image Gallery: {dogId}</div>;
};
