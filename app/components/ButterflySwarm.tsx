import SmallButterfly from "./SmallButterfly";

export default function ButterflySwarm() {
  return (
    <>
      <SmallButterfly delay={0} top="15%" size={28} duration={14} />
      <SmallButterfly delay={2} top="25%" size={32} duration={18} />
      <SmallButterfly delay={4} top="40%" size={24} duration={16} />
      <SmallButterfly delay={6} top="55%" size={30} duration={20} />
      <SmallButterfly delay={8} top="70%" size={26} duration={15} />
      <SmallButterfly delay={10} top="85%" size={22} duration={13} />
    </>
  );
}
