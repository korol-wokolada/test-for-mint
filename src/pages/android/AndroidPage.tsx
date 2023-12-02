import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchAndroidWorkers } from "../../api/apiAndroidWorkers";
import {
  setAndroidWorkersData,
  setAndroidWorkersError,
} from "../../redux/androidWorkers/slice";

export default function AndriodPage() {
  const {
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
    handleRetry,
  } = useDataWorkers(
    fetchAndroidWorkers,
    setAndroidWorkersError,
    setAndroidWorkersData
  );

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
