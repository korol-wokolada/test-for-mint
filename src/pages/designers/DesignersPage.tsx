import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import { fetchDesigners } from "../../redux/designerWorkers/thunk";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import useWorkersData from "../../customHooks/useWorkersDataHook";

export default function DesignersPage() {
  const {
    currentPath,
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
  } = useWorkersData((state) => state.designers, fetchDesigners);

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
