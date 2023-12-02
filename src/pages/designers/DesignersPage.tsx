import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchDesigners } from "../../api/apiDesigners";
import {
  setDesignersWorkersData,
  setDesignersWorkersError,
} from "../../redux/designerWorkers/slice";

export default function DesignersPage() {
  const {
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
    handleRetry,
  } = useDataWorkers(
    fetchDesigners,
    setDesignersWorkersError,
    setDesignersWorkersData
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
