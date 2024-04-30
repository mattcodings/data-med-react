import { TechnicalFeatures, EHRFeatures, LatestNews } from "../components";

const Landing = () => {
  return (
    <main>
      <h1 className="text-6xl text-center my-10 bg-primary text-white p-8">
        DataMed Electronic Health Record Specialists
      </h1>
      <p className="text-2xl lg:w-2/3 w-5/6 mx-auto my-20">
        DataMed systems are designed to store data accurately and to capture the
        state of a patient across time. Our systems eliminate the need to track
        down a patient's previous paper medical records and assists in ensuring
        data is accurate and legible. DataMed systems can reduce risk of data
        replication as there is only one modifiable file, which means the file
        is more likely up to date, and decreases risk of lost paperwork. Due to
        the digital information being searchable and in a single file, EMRs are
        more effective when extracting medical data for the examination of
        possible trends and long term changes in a patient. Population-based
        studies of medical records may also be facilitated by the widespread
        adoption of EHRs and EMRs.
      </p>
      <ul className="flex flex-wrap mx-[10%]">
        <EHRFeatures />
      </ul>
      <p className="mx-[10%] border-b-8 border-primary text-4xl pb-1 mb-[50px] mt-[100px]">
        Technical Features
      </p>
      <ul className="flex flex-wrap mx-[10%]">
        <TechnicalFeatures />
      </ul>
      <p className="mx-[10%] border-b-8 border-primary text-4xl pb-1 mb-[50px] mt-[100px]">
        Latest News
      </p>
      <LatestNews />
    </main>
  );
};
export default Landing;
