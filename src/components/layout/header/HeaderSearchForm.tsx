"use client"
import {SubmitHandler, useForm} from "react-hook-form";
import {ISearchForm} from "@/types/api.types";
import CustomInput from "@/components/ui/form/CustomInput";

export default function HeaderSearchForm() {
    const { handleSubmit, control} = useForm<ISearchForm>({
        defaultValues: {
            search: ""
        }
    })
    const onSubmit: SubmitHandler<ISearchForm> = (data) => console.log(data)
return(
    <form onSubmit={handleSubmit(onSubmit)} className="order-3">
        <CustomInput
            size={20}
            icon={'search'}
            style={'hidden lg:flex'}
            inputStyle={'xl:block hidden'}
            control={control}
            name="search"
            type={"search"}
            placeholder={"Search"}
        />
    </form>
)
}