import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchManagers } from "../../api/apiManagers";
import {
  setManagersWorkersData,
  setManagersWorkersErrors,
} from "../../redux/managerWorkers/slice";

export default function ManagersPage() {
  const {
    handleRetry,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useDataWorkers(
    fetchManagers,
    setManagersWorkersErrors,
    setManagersWorkersData
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
