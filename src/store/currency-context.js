const CurrencyContext = React.createContext({
  searchedCoins: [],
  inputPrice: 0,
  outputPrice: 0,
  selectedInputCoin: "",
  selectedOutputCoin: "",
  resultInputPrice: 0,
  resultOutputPrice: 0,
  searchItem: (id) => {},
  changeInput: (val) => {},
});

export default CurrencyContext;
