import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "d 'de' LLLL 'de' yyyy, hh:mm", { locale: ptBR })}
    </time>
  );
}
