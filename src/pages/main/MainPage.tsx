import CriticalError from "../../components/criticalError/CriticalError";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchAllWorker } from "../../api/apiAllWorkers";
import { setWorkersData, setWorkersError } from "../../redux/allWorkers/slice";

export default function MainPage() {
  const {
    handleRetry,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useDataWorkers(fetchAllWorker, setWorkersError, setWorkersData);

  if (error) {
    return <CriticalError handleRetry={handleRetry} />;
  }

  return (
    <main>
      {showSkeleton && <SceletonWrapperCard />}

      {showNotFound && <NotFoundWorker />}

      {!showSkeleton && !showNotFound && (
        <CardWrapper sortType={sortType} workersArray={workersArray} />
      )}
    </main>
  );
}
