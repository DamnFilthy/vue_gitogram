import Issues from "./Issues";

export default {
  title: "Issues",
  components: {Issues}
}

export const defaultView = () => ({
  components: {
    Issues
  },
  template: `
    <ul>
      <li class="issues-issue" >
        <span class="issues-author">Some Author</span>
        <span class="issues-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto aspernatur corporis delectus ea eos et eveniet explicabo facilis illo ipsum laboriosam, magnam magni nobis non quo recusandae reprehenderit? Nesciunt!</span>
      </li>
    </ul>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
