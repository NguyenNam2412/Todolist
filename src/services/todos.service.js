import axios from "axios";

//npx json-server --watch db.json --port 8000
const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  data: {
    id: "application/json",
    title: "application/json",
    complate: "application/json",
  }
});

const getAllTodo = () => instance.get('todos');

const add = (title) => {
  return instance.post("todos", {
    title,
    complate: false
  });
};

const remove = (id) => {
  return instance.delete("todos/" + id);
}

const update = (payload) => {
  return instance.put("todos/" + payload.id + '/', {
    title: payload.title,
    complate: false
  });
}

const check = (payload) => {
  return instance.put("todos/" + payload.id + '/', {
    title: payload.title,
    complate: payload.complate
  });
}

const updateAll = (payload) => {
  return payload.map(item => (
    instance.put("todos/" + item.id + '/', {
        title: item.title,
        complate: !item.complate
      })
    )
  )
}

const deleteAll = (payload) => {
  return payload.map(item => (
    instance.delete("todos/" + item.id)
    )
  )
}

const todosService = {
  getAllTodo,
  add,
  remove,
  update,
  check,
  updateAll,
  deleteAll
};

export default todosService;