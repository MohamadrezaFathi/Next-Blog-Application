
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  getUserApi,
  signinApi,
  signupApi,
} from "@/services/authService";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "signin":
    case "signup":
    case "user/loaded":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case "guest":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default function AuthProvider({ children }) {
  const [
    { user, isAuthenticated, isLoading, error },
    dispatch,
  ] = useReducer(authReducer, initialState);

  const router = useRouter();

  // دریافت اطلاعات کاربر در زمان بارگذاری اولیه برنامه
  const getUser = useCallback(async () => {
    try {
      const result = await getUserApi();
      const authenticatedUser = result?.user;

      if (!authenticatedUser) {
        throw new Error(
          "اطلاعات کاربر در پاسخ سرور پیدا نشد."
        );
      }

      dispatch({
        type: "user/loaded",
        payload: authenticatedUser,
      });

      return authenticatedUser;
    } catch (error) {
      // کاربر وارد حساب نشده است؛ این وضعیت طبیعی است.
      if (error?.response?.status === 401) {
        dispatch({ type: "guest" });
        return null;
      }

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "دریافت اطلاعات کاربر ناموفق بود.";

      dispatch({
        type: "rejected",
        payload: message,
      });

      // در صورت خطای شبکه یا خطای غیرمنتظره
      toast.error(message);

      return null;
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  // ورود کاربر
  async function signin(values) {
    dispatch({ type: "loading" });

    try {
      const result = await signinApi(values);
      const authenticatedUser = result?.user;

      if (!authenticatedUser) {
        throw new Error(
          "ورود انجام شد، اما اطلاعات کاربر در پاسخ سرور پیدا نشد."
        );
      }

      dispatch({
        type: "signin",
        payload: authenticatedUser,
      });

      toast.success(
        result?.message || "با موفقیت وارد حساب کاربری شدی."
      );

      router.push("/profile");

      return authenticatedUser;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "ورود به حساب کاربری ناموفق بود.";

      dispatch({
        type: "rejected",
        payload: message,
      });

      toast.error(message);

      return null;
    }
  }

  // ثبت‌نام کاربر
  async function signup(values) {
    dispatch({ type: "loading" });

    try {
      const result = await signupApi(values);
      const authenticatedUser = result?.user;

      if (!authenticatedUser) {
        throw new Error(
          "ثبت‌نام انجام شد، اما اطلاعات کاربر در پاسخ سرور پیدا نشد."
        );
      }

      dispatch({
        type: "signup",
        payload: authenticatedUser,
      });

      toast.success(
        result?.message || "حساب کاربری با موفقیت ایجاد شد."
      );

      router.push("/profile");

      return authenticatedUser;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "ثبت‌نام ناموفق بود.";

      dispatch({
        type: "rejected",
        payload: message,
      });

      toast.error(message);

      return null;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        signin,
        signup,
        getUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      "useAuth باید داخل AuthProvider استفاده شود."
    );
  }

  return context;
}
