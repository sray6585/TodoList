class ToDo {
  construtor() {
    this.list = [];
  }
  add(val) {
    this.list.push({ id: parseInt(Math.random() * 1000), item: val });
  }
  delete(id) {
    this.list = this.list.filter((val) => val.id != id);
  }
  update(id, val) {
    this.list = this.list.map((item) => {
      if (item.id == id) return { id, val };
      return item;
    });
  }
  isEmpty() {}
}
