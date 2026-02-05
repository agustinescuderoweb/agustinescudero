export default function LifestyleTip({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="my-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Lifestyle Tip 💡
      </p>

      <p className="mt-3 text-lg font-medium text-gray-800">
        {children}
      </p>
    </div>
  )
}
