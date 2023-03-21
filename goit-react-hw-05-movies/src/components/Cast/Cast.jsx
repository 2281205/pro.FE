import { getCast, getPoster } from '../../api/FetchAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastBox,
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastText,
  CastEmpty,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchMovieCast = async () => {
      try {
        const data = await getCast(movieId);
        setActors(data.cast);
      } catch (error) {
        console.log(error);
        setError('Something wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <CastBox>
      {actors && actors.length > 0 ? (
        <CastList>
          {actors.map(({ id, name, profile_path, character }) => {
            const img = getPoster(profile_path);
            return (
              <CastItem key={id}>
                <CastImg src={img} alt={name} />
                <CastName>{name}</CastName>
                <CastText>
                  <b>Character:</b> {character}
                </CastText>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <CastEmpty>We don't have data about the actors</CastEmpty>
      )}
    </CastBox>
  );
};

export default Cast;
