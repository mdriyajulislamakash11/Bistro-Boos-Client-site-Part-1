import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTIN_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, recipe, price, image, _id } = useLoaderData();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // Upload to imgBB and then an url:
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item data to the  server eith the imageBB url:
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      // now
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      
      console.log(menuRes.data);

      if (menuRes.data.modifiedCount > 0 ) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is Updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="refresh info"
      ></SectionTitle>

      {/* react hook from theke ana hoyese */}
      <div className="p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              required
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          {/* recipe details */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your bio</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24 w-full"
              defaultValue={recipe}
              placeholder="Bio"
            ></textarea>
          </div>

          {/* file input */}
          <div className=" my-5">
            <input
              {...register("image", { required: true })}
              type="file"
            //   defaultValue={image}
              className="file-input w-full "
            />
          </div>

          <button type="submit" className="btn">
            Update menu item <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
