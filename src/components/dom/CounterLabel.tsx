import useStore from "@stores/useStore";
import { useTranslation } from "react-i18next";

export default function CounterLabel() {
  const counter = useStore((state) => state.counter);

  const { t } = useTranslation();

  return (
    <div className="mt-4 flex w-full flex-row justify-center">
      <h1 className="w-fit rounded-md bg-slate-500 p-5 text-center text-3xl font-bold text-white">
        {t("count", { count: counter })}
      </h1>
    </div>
  );
}
