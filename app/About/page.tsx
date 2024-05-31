const About = () => {
  return (
    <div className="container pt-10 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">BXP 獲得方法</h2>
      <ul className="list-disc pl-6">
        <li>自分のポケモンを1匹配置: 100 BXP</li>
        <li>自分の配置ポケモンにきのみを10個与える: 100 BXP</li>
        <li>配置ポケモン6匹にきのみを各10個与える: 600 BXP</li>
        <li>防衛時間1時間 (60分): 60 BXP</li>
        <li>レイドバトル1回: 1000 BXP</li>
      </ul>
    </div>
  );
};
export default About;
