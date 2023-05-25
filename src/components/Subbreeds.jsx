import { useParams } from 'react-router-dom';

export const Subbreeds = () => {
  const { dogId } = useParams();
  // useEffect(()=>{
  //HTTP - запит
  //}, [])
  return <div>Subbreeds: {dogId}</div>;
};
