import "./style.css";
import { useNavigate } from "react-router-dom";

export type CriticalErrorPropsType = {
  pageName?: string;
  handleRetry?: () => void;
};

export default function CriticalError({
  pageName,
  handleRetry,
}: CriticalErrorPropsType) {
  const navigate = useNavigate();

  const handleRetryButton = () => {
    if (handleRetry) {
      handleRetry();
    }

    if (pageName) {
      navigate(pageName);
    }
  };

  return (
    <div className="wrapper__error">
      <div className="error__icon"></div>

      <p className="error__caption--black">Какой-то сверхразум все сломал</p>

      <p className="error__caption--grey">Постараемся быстро починить</p>

      <button onClick={handleRetryButton} className="error__link--refresh">
        Попробовать снова
      </button>
    </div>
  );
}
