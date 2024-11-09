const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
    transition:box-shadow 0.3s ease-in-out;
    &:hover{
      box-shadow:1px 4px 4px rgba(0,0,0,.28);
    }`,
  },
};

export default theme;
