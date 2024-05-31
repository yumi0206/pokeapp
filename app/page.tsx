"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Grape, Shield, Swords } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [berryCount, setBerryCount] = useState<number>(0);
  const [defenseDay, setDefenseDay] = useState<number>(0);
  const [defenseHour, setDefenseHour] = useState<number>(0);
  const [defenseMinute, setDefenseMinute] = useState<number>(0);
  const [raidWins, setRaidWins] = useState<number>(0);
  const [battleCount, setBattleCount] = useState<number>(0);
  const [currentBXP, setCurrentBXP] = useState<number>(0);
  const [remainingBXP, setRemainingBXP] = useState<number>(30000);
  const [daysToReachGold, setDaysToReachGold] = useState<number>(0);
  const [berriesToReachGold, setBerriesToReachGold] = useState<number>(0);
  const [raidsToReachGold, setRaidsToReachGold] = useState<number>(0);
  const [daysAndHours, setDaysAndHours] = useState<string>("");

  const calculateRemainingBXP = () => {
    const defenseMinutes = defenseDay * 1440 + defenseHour * 60 + defenseMinute;
    const currentBXP =
      berryCount * 10 + defenseMinutes + raidWins * 1000 + battleCount * 29;
    const remainingBXP = Math.max(30000 - currentBXP, 0);
    const averageDailyBXP = currentBXP / (defenseMinutes / 1440);
    const berriesToReachGold = remainingBXP / 10;
    const raidsToReachGold =Math.ceil(remainingBXP / 1000);

    const daysAndHours = (remainingBXP: number, averageDailyBXP: number) => {
      const daysToReachGoal = Math.floor(remainingBXP / averageDailyBXP);
      const remainingHours = Math.round(
        ((remainingBXP % averageDailyBXP) / averageDailyBXP) * 24
      );

      return `${daysToReachGoal} 日 ${remainingHours} 時間`;
    };

    setCurrentBXP(currentBXP);
    setRemainingBXP(remainingBXP);
    setDaysToReachGold(daysToReachGold);
    setBerriesToReachGold(berriesToReachGold);
    setRaidsToReachGold(raidsToReachGold);
    setDaysAndHours(daysAndHours(remainingBXP, averageDailyBXP));
  };

  const resetForm = () => {
    setBerryCount(0);
    setDefenseDay(0);
    setDefenseHour(0);
    setDefenseMinute(0);
    setRaidWins(0);
    setBattleCount(0);
    setCurrentBXP(0);
    setRemainingBXP(30000);
    setDaysToReachGold(0);
    setBerriesToReachGold(0);
    setRaidsToReachGold(0);
  };

  return (
    <main className="container mx-auto max-w-[600px] px-12">
      <Card className="mb-6 bg-white/30 dark:bg-black/30 border-none">
        <CardHeader>
          <h2 className="text-xl font-bold">アクティビティ</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="berryCount"
                className="mb-2  flex flex-end items-center gap-2"
              >
                <Grape className="h-4 w-4" />
                きのみ
              </Label>
              <Input
                type="number"
                id="berryCount"
                value={berryCount}
                onChange={(e) => setBerryCount(parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label
                htmlFor="defenseDay"
                className="mb-2 flex flex-end items-center gap-2"
              >
                <Shield className="h-4 w-4" /> 防衛時間
              </Label>
              <div className="flex flex-end items-center gap-2">
                <Input
                  type="number"
                  id="defenseDay"
                  min="0"
                  value={defenseDay}
                  onChange={(e) => setDefenseDay(parseInt(e.target.value))}
                  className=""
                />
                <span>日</span>
                <Input
                  type="number"
                  id="defenseHour"
                  min="0"
                  max="23"
                  value={defenseHour}
                  onChange={(e) => setDefenseHour(parseInt(e.target.value))}
                />
                <span className="w-48 text-center">時間</span>
                <Input
                  type="number"
                  id="defenseMinute"
                  min="0"
                  max="59"
                  value={defenseMinute}
                  onChange={(e) => setDefenseMinute(parseInt(e.target.value))}
                />
                <span>分</span>
              </div>
            </div>
            <div>
              <Label
                htmlFor="battleCount"
                className="mb-2 flex flex-end items-center gap-2"
              >
                <Swords className="h-4 w-4" />
                倒した数
              </Label>
              <Input
                type="number"
                id="battleCount"
                min="0"
                value={battleCount}
                onChange={(e) => setBattleCount(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Button
              variant="outline"
              className="rounded-md py-3 px-4 border-none"
              onClick={resetForm}
            >
              リセット
            </Button>
            <Button
              variant="outline"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:text-white focus:outline-none hover:opacity-60 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-md border-none py-3 px-8"
              onClick={calculateRemainingBXP}
            >
              計算する
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white/30 dark:bg-black/30 border-none">
        <CardHeader>
          <h2 className="text-xl font-semibold">計算結果</h2>
        </CardHeader>
        <CardContent>
          <p className="font-medium mb-2">
            現在の経験値:{" "}
            <span id="currentBXP">{currentBXP.toLocaleString()}</span>
          </p>
          <p className="font-medium mb-2">
            金バッジに必要な残り経験値:{" "}
            <span id="remainingBXP">{remainingBXP.toLocaleString()}</span>
          </p>
          <p className="font-medium mb-2">
            金バッジに必要な日数:{" "}
            <span id="daysToReachGold">{daysAndHours}</span>
          </p>
          <p className="font-medium mb-2">
            金バッジに必要なきのみ:{" "}
            <span id="daysToReachGold">
              {berriesToReachGold.toLocaleString()}
            </span>
          </p>
          <p className="font-medium mb-2">
            金バッジに必要なレイド勝利数:{" "}
            <span id="daysToReachGold">
              {raidsToReachGold.toLocaleString()}
            </span>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
