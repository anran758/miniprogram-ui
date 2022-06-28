import CustomPage from '../base/CustomPage';

CustomPage({
  data: {
    list: [],
  },

  kindToggle: function (e) {
    const id = e.currentTarget.id,
      list = this.data.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list,
    });
  },

  themeToggle() {
    const App = getApp();

    if (App.themeChanged) {
      if (App.globalData.theme === 'light') {
        App.themeChanged('dark');
      } else {
        App.themeChanged('light');
      }
    }
  },
});
