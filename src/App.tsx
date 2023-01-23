import { useFethRepositories } from "./hooks/useRepos";
import Card from "./components/Card";
import { useFavoriteReposStore } from "./store/favoriteRepos";

const App = () => {
  const { data, isLoading } = useFethRepositories();
  const {favoriteReposIds} = useFavoriteReposStore()

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  // data? el ? indica que si existe que haga el recorrido
  return (
    <div>
      {data?.map(repository => (
        <Card key={repository.id} repository={repository} isFavorite={favoriteReposIds.includes(repository.id)} />
      ))}
    </div>
  );
};

export default App;
