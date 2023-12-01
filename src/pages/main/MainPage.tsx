import { fetchAllWorkers } from "../../redux/allWorkers/thunk";
import CriticalError from "../../components/criticalError/CriticalError";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import useWorkersData from "../../customHooks/useWorkersDataHook";

export default function MainPage() {
  const {
    currentPath,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useWorkersData((state) => state.allWorkers, fetchAllWorkers);

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
