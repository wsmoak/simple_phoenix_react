defmodule SimplePhoenixReact.PageController do
  use SimplePhoenixReact.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
