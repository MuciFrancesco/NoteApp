import { PlaceholderContainer } from '@/containers/Placeholder/PlaceholderContainer';

interface PlaceholderPageProps {
  readonly labelKey: string;
}

export function PlaceholderPage({ labelKey }: PlaceholderPageProps) {
  return <PlaceholderContainer labelKey={labelKey} />;
}
