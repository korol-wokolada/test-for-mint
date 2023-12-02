import CriticalError from "../../components/criticalError/CriticalError";
import SceletonWrapperCard from "../../components/skeletons/SceletonCard";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import NotFoundWorker from "../../components/notFoundWorker/NotFoundWorker";
import { useDataWorkers } from "../../customHooks/useDataWorkers";
import { fetchAnalysts } from "../../api/apiAnalysts";
import {
  setAnalystsWorkersData,
  setAnalystsWorkersError,
} from "../../redux/analystWorkers/slice";

export default function AnalystsPage() {
  const {
    error,
    sortType,
    showSkeleton,
    showNotFound,
    workersArray,
    handleRetry,
  } = useDataWorkers(
    fetchAnalysts,
    setAnalystsWorkersError,
    setAnalystsWorkersData
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
