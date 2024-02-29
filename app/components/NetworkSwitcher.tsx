import { FC } from 'react';
import dynamic from 'next/dynamic';
import { useNetworkConfiguration } from '@/contexts/NetworkConfigurationProvider';

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } = useNetworkConfiguration();

  console.log('network switch: ', networkConfiguration);

  return (
    <label className="cursor-pointer label">
      <a>Network</a>

      <select value={networkConfiguration}
        onChange={(e) => setNetworkConfiguration(e.target.value)} className="select select-primary w-fit max-w-xs bg-black">
        <option value="mainnet-beta">main</option>
        <option value="devnet">dev</option>
        <option value="testnet">test</option>
      </select>
    </label>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false
})