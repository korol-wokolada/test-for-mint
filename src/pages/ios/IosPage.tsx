import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchIosWorkers } from "../../api/apiIosWorkers";
import {
  setIosWorkersData,
  setIosWorkersError,
} from "../../redux/iosWorkers/slice";

export default function IosPage() {
  const {
    handleRetry,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useDataWorkers(fetchIosWorkers, setIosWorkersError, setIosWorkersData);

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
