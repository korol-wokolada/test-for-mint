import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import { fetchIosWorkers } from "../../redux/iosWorkers/thunk";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import useWorkersData from "../../customHooks/useWorkersDataHook";

export default function IosPage() {
  const {
    currentPath,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useWorkersData((state) => state.ios, fetchIosWorkers);

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
