import { useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  return <>DogDetails: {dogId}</>;
};

export default DogDetails;
