const getPersonInfo = () => ({
  id: 1,
  name: "hoge" as const
});

type PersonInfo = ReturnType<typeof getPersonInfo>;

const person: PersonInfo = {
  id: 1,
  name: "hoge"
};
