import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import { fetchManagers } from "../../redux/managerWorkers/thunk";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import useWorkersData from "../../customHooks/useWorkersDataHook";

export default function ManagersPage() {
  const {
    currentPath,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useWorkersData((state) => state.managers, fetchManagers);

  if (error) {
    return <CriticalError pageName={currentPath} />;
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
