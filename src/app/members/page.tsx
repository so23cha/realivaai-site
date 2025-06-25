export default function Team() {
  return (
    <section className="px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Members</h1>

      <div className="space-y-8">
        {/* CEO */}
        <div>
          <h2 className="text-2xl font-bold">CEO</h2>
          <p className="text-xl font-semibold mt-2">Junseok Ma</p>
          <p className="mt-4">
            He received his B.S. (2020) and M.S. (2022) in Electrical Engineering from POSTECH, and is now a Ph.D. candidate there under Prof. Woosung Kim in the WADE group. He’s also a visiting Ph.D. student at Oxford’s Soft Matter Photonics Group under Profs. Stephen M. Morris and Steve Elston.
          </p>
        </div>

        {/* COO & CFO */}
        <div>
          <h2 className="text-2xl font-bold">COO &amp; CFO</h2>
          <p className="text-xl font-semibold mt-2">Sion Cha</p>
          <p className="mt-4">
            He received his B.S. (2020) and M.S. (2022) in Electrical Engineering from POSTECH, and is now a Ph.D. candidate there under Prof. Woosung Kim in the WADE group.
          </p>
        </div>

        {/* CTO */}
        <div>
          <h2 className="text-2xl font-bold">CTO</h2>
          <p className="text-xl font-semibold mt-2">Hyeonho Kook</p>
          <p className="mt-4">
            He received his B.S. (2023) in Electrical Engineering from POSTECH, and is now a M.S. candidate there under Prof. Eunhyeok Park in the ECo group.
          </p>
        </div>
      </div>
    </section>
  )
}