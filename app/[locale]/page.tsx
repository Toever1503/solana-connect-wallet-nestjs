"use client"
import useUserSOLBalanceStore from "@/stores/useUserSOLBalanceStore";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Home() {
  // const t = useTranslations('Index');

  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s?.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  const [balanceUser, setBalanceUser] = useState<number>(0);
  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection).then(val => {
        setBalanceUser(val)
      })
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return <h1>

    Your wallet balance:  {(balanceUser || 0).toLocaleString()}
  </h1>;
}
